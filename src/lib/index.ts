import {writeFileSync} from 'fs';
import {ModuleKind, ScriptTarget} from 'typescript';
import {buildDocumentation, type DocEntry, type DocEntryConstructor, type DocEntryType} from './docs';
import {documentationToMarkdown} from './markdown';

export {DocEntry, DocEntryConstructor, DocEntryType, buildDocumentation};
export {documentationToMarkdown};

export const generateDocumentation = () => {
  const entries: DocEntry[] = buildDocumentation({
    fileNames: process.argv.slice(2),
    options: {
      target: ScriptTarget.ES2020,
      module: ModuleKind.CommonJS
    }
  });

  const markdown: string = documentationToMarkdown(entries);

  writeFileSync('docs.md', markdown, 'utf-8');
};