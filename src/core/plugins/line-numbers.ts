/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
/* eslint-disable radix */
export const lineNumberInit = (hljs: any, w: any, d:any) => {
  const TABLE_NAME = 'hljs-ln';
  const LINE_NAME = 'hljs-ln-line';
  const CODE_BLOCK_NAME = 'hljs-ln-code';
  const NUMBERS_BLOCK_NAME = 'hljs-ln-numbers';
  const NUMBER_LINE_NAME = 'hljs-ln-n';
  const DATA_ATTR_NAME = 'data-line-number';
  const BREAK_LINE_REGEXP = /\r\n|\r|\n/g;

  if (hljs) {
    // eslint-disable-next-line no-use-before-define
    hljs.initLineNumbersOnLoad = initLineNumbersOnLoad;
    // eslint-disable-next-line no-use-before-define
    hljs.lineNumbersBlock = lineNumbersBlock;
    // eslint-disable-next-line no-use-before-define
    hljs.lineNumbersValue = lineNumbersValue;

    // eslint-disable-next-line no-use-before-define
    addStyles();
  } else {
    // eslint-disable-next-line no-undef
    w.console.error('highlight.js not detected!');
  }

  function isHljsLnCodeDescendant(domElt: any) {
    let curElt = domElt;
    while (curElt) {
      if (curElt.className && curElt.className.indexOf('hljs-ln-code') !== -1) {
        return true;
      }
      curElt = curElt.parentNode;
    }
    return false;
  }

  function getHljsLnTable(hljsLnDomElt :any) {
    let curElt = hljsLnDomElt;
    while (curElt.nodeName !== 'TABLE') {
      curElt = curElt.parentNode;
    }
    return curElt;
  }

  // Function to workaround a copy issue with Microsoft Edge.
  // Due to hljs-ln wrapping the lines of code inside a <table> element,
  // itself wrapped inside a <pre> element, window.getSelection().toString()
  // does not contain any line breaks. So we need to get them back using the
  // rendered code in the DOM as reference.
  function edgeGetSelectedCodeLines(selection:any) {
    // current selected text without line breaks
    const selectionText = selection.toString();

    // get the <td> element wrapping the first line of selected code
    let tdAnchor = selection.anchorNode;
    while (tdAnchor.nodeName !== 'TD') {
      tdAnchor = tdAnchor.parentNode;
    }

    // get the <td> element wrapping the last line of selected code
    let tdFocus = selection.focusNode;
    while (tdFocus.nodeName !== 'TD') {
      tdFocus = tdFocus.parentNode;
    }

    // extract line numbers
    let firstLineNumber = parseInt(tdAnchor.dataset.lineNumber);
    let lastLineNumber = parseInt(tdFocus.dataset.lineNumber);

    // multi-lines copied case
    if (firstLineNumber !== lastLineNumber) {
      let firstLineText = tdAnchor.textContent;
      let lastLineText = tdFocus.textContent;

      // if the selection was made backward, swap values
      if (firstLineNumber > lastLineNumber) {
        let tmp = firstLineNumber;
        firstLineNumber = lastLineNumber;
        lastLineNumber = tmp;
        tmp = firstLineText;
        firstLineText = lastLineText;
        lastLineText = tmp;
      }

      // discard not copied characters in first line
      while (selectionText.indexOf(firstLineText) !== 0) {
        firstLineText = firstLineText.slice(1);
      }

      // discard not copied characters in last line
      while (selectionText.lastIndexOf(lastLineText) === -1) {
        lastLineText = lastLineText.slice(0, -1);
      }

      // reconstruct and return the real copied text
      let selectedText = firstLineText;
      const hljsLnTable = getHljsLnTable(tdAnchor);
      for (let i = firstLineNumber + 1; i < lastLineNumber; ++i) {
        const codeLineSel = format('.{0}[{1}="{2}"]', [CODE_BLOCK_NAME, DATA_ATTR_NAME, i]);
        const codeLineElt = hljsLnTable.querySelector(codeLineSel);
        selectedText += `\n${codeLineElt.textContent}`;
      }
      selectedText += `\n${lastLineText}`;
      return selectedText;
      // single copied line case
    }
    return selectionText;
  }

  // ensure consistent code copy/paste behavior across all browsers
  // (see https://github.com/wcoder/highlightjs-line-numbers.js/issues/51)
  document.addEventListener('copy', e => {
    // get current selection
    const selection = window.getSelection();
    // override behavior when one wants to copy line of codes
    if (isHljsLnCodeDescendant(selection?.anchorNode)) {
      let selectionText;
      // workaround an issue with Microsoft Edge as copied line breaks
      // are removed otherwise from the selection string
      if (window.navigator.userAgent.indexOf('Edge') !== -1) {
        selectionText = edgeGetSelectedCodeLines(selection);
      } else {
        // other browsers can directly use the selection string
        selectionText = selection?.toString();
      }
      e.clipboardData?.setData('text/plain', selectionText);
      e.preventDefault();
    }
  });

  function addStyles() {
    const css = d.createElement('style');
    css.type = 'text/css';
    css.innerHTML = format(
      '.{0}{border-collapse:collapse}'
          + '.{0} td{padding:0}'
          + '.{1}:before{content:attr({2})}',
      [
        TABLE_NAME,
        NUMBER_LINE_NAME,
        DATA_ATTR_NAME
      ]
    );
    d.getElementsByTagName('head')[0].appendChild(css);
  }

  function initLineNumbersOnLoad(options:any) {
    if (d.readyState === 'interactive' || d.readyState === 'complete') {
      documentReady(options);
    } else {
      w.addEventListener('DOMContentLoaded', () => {
        documentReady(options);
      });
    }
  }

  function documentReady(options:any) {
    try {
      const blocks = d.querySelectorAll('code.hljs,code.nohighlight');

      for (const i in blocks) {
        if (blocks.hasOwnProperty(i)) {
          if (!isPluginDisabledForBlock(blocks[i])) {
            lineNumbersBlock(blocks[i], options);
          }
        }
      }
    } catch (e) {
      w.console.error('LineNumbers error: ', e);
    }
  }

  function isPluginDisabledForBlock(element:any) {
    return element.classList.contains('nohljsln');
  }

  function lineNumbersBlock(element:any, options:any) {
    if (typeof element !== 'object') return;

    async(() => {
      element.innerHTML = lineNumbersInternal(element, options);
    });
  }

  function lineNumbersValue(value:any, options:any) {
    if (typeof value !== 'string') return;

    const element = document.createElement('code');
    element.innerHTML = value;

    return lineNumbersInternal(element, options);
  }

  function lineNumbersInternal(element:any, options:any) {
    const internalOptions = mapOptions(element, options);

    duplicateMultilineNodes(element);

    return addLineNumbersBlockFor(element.innerHTML, internalOptions);
  }

  function addLineNumbersBlockFor(inputHtml:any, options:any) {
    const lines = getLines(inputHtml);

    // if last line contains only carriage return remove it
    if (lines[lines.length - 1].trim() === '') {
      lines.pop();
    }

    if (lines.length > 1 || options.singleLine) {
      let html = '';

      for (let i = 0, l = lines.length; i < l; i++) {
        html += format(
          '<tr>'
                      + '<td class="{0} {1}" {3}="{5}">'
                          + '<div class="{2}" {3}="{5}"></div>'
                      + '</td>'
                      + '<td class="{0} {4}" {3}="{5}">'
                          + '{6}'
                      + '</td>'
                  + '</tr>',
          [
            LINE_NAME,
            NUMBERS_BLOCK_NAME,
            NUMBER_LINE_NAME,
            DATA_ATTR_NAME,
            CODE_BLOCK_NAME,
            i + options.startFrom,
            lines[i].length > 0 ? lines[i] : ' '
          ]
        );
      }

      return format('<table class="{0}">{1}</table>', [TABLE_NAME, html]);
    }

    return inputHtml;
  }

  /**
   * @param {HTMLElement} element Code block.
   * @param {Object} options External API options.
   * @returns {Object} Internal API options.
   */
  function mapOptions(element:any, options:any) {
    options = options || {};
    return {
      singleLine: getSingleLineOption(options),
      startFrom: getStartFromOption(element, options)
    };
  }

  function getSingleLineOption(options:any) {
    const defaultValue = false;
    if (options.singleLine) {
      return options.singleLine;
    }
    return defaultValue;
  }

  function getStartFromOption(element:any, options:any) {
    const defaultValue = 1;
    let startFrom = defaultValue;

    if (isFinite(options.startFrom)) {
      startFrom = options.startFrom;
    }

    // can be overridden because local option is priority
    const value = getAttribute(element, 'data-ln-start-from');
    if (value !== null) {
      startFrom = toNumber(value, defaultValue);
    }

    return startFrom;
  }

  /**
   * Recursive method for fix multi-line elements implementation in highlight.js
   * Doing deep passage on child nodes.
   * @param {HTMLElement} element
   */
  function duplicateMultilineNodes(element:any) {
    const nodes = element.childNodes;
    for (const node in nodes) {
      if (nodes.hasOwnProperty(node)) {
        const child = nodes[node];
        if (getLinesCount(child.textContent) > 0) {
          if (child.childNodes.length > 0) {
            duplicateMultilineNodes(child);
          } else {
            duplicateMultilineNode(child.parentNode);
          }
        }
      }
    }
  }

  /**
   * Method for fix multi-line elements implementation in highlight.js
   * @param {HTMLElement} element
   */
  function duplicateMultilineNode(element:any) {
    const { className } = element;

    if (!/hljs-/.test(className)) return;

    const lines = getLines(element.innerHTML);

    for (var i = 0, result = ''; i < lines.length; i++) {
      const lineText = lines[i].length > 0 ? lines[i] : ' ';
      result += format('<span class="{0}">{1}</span>\n', [className, lineText]);
    }

    element.innerHTML = result.trim();
  }

  function getLines(text:any) {
    if (text.length === 0) return [];
    return text.split(BREAK_LINE_REGEXP);
  }

  function getLinesCount(text:any) {
    return (text.trim().match(BREAK_LINE_REGEXP) || []).length;
  }

  ///
  /// HELPERS
  ///

  function async(func:any) {
    w.setTimeout(func, 0);
  }

  /**
   * {@link https://wcoder.github.io/notes/string-format-for-string-formating-in-javascript}
   * @param {string} format
   * @param {array} args
   */
  // eslint-disable-next-line @typescript-eslint/no-shadow
  function format(format:any, args:any) {
    return format.replace(/\{(\d+)\}/g, (m:any, n:any) => {
      return args[n] !== undefined ? args[n] : m;
    });
  }

  /**
   * @param {HTMLElement} element Code block.
   * @param {String} attrName Attribute name.
   * @returns {String} Attribute value or empty.
   */
  function getAttribute(element:any, attrName:any) {
    return element.hasAttribute(attrName) ? element.getAttribute(attrName) : null;
  }

  /**
   * @param {String} str Source string.
   * @param {Number} fallback Fallback value.
   * @returns Parsed number or fallback value.
   */
  function toNumber(str:any, fallback:any) {
    if (!str) return fallback;
    const number = Number(str);
    return isFinite(number) ? number : fallback;
  }
};
