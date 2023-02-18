import markdownItCodeLineNumber from '@vuepress/markdown/lib/lineNumbers';

const extendMarkdown = (mdParser:any) => {
  if (mdParser) {
    mdParser.use(markdownItCodeLineNumber);
  }
};

export const lineNumbers = () => {
  return {
    install(VMdEditor:any) {
      VMdEditor.extendMarkdown(extendMarkdown);
    }
  };
};
