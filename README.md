# tsdoc-to-markdown

Generates markdown API documentation from TypeScript source code. Useful for generating docs from code and injecting it into project README files.

<!-- TSDOC_START -->

## :toolbox: Functions

- [buildDocumentation](#gear-builddocumentation)
- [documentationToMarkdown](#gear-documentationtomarkdown)
- [generateDocumentation](#gear-generatedocumentation)

### :gear: buildDocumentation

Build the documentation entries for the selected sources.

| Function | Type |
| ---------- | ---------- |
| `buildDocumentation` | `({ inputFiles, options }: { inputFiles: string[]; options?: CompilerOptions; }) => DocEntry[]` |

Parameters:

* `params.inputFiles`: The list of files to scan and for which the documentation should be build.
* `params.options`: Optional compiler options to generate the docs


### :gear: documentationToMarkdown

Convert the documentation entries to an opinionated Markdown format.

| Function | Type |
| ---------- | ---------- |
| `documentationToMarkdown` | `({ entries, options }: { entries: DocEntry[]; options?: MarkdownOptions; }) => string` |

Parameters:

* `params.entries`: The entries of the documentation (functions, constants and classes).
* `params.options`: Optional configuration to render the Markdown content. See `types.ts` for details.


### :gear: generateDocumentation

Generate documentation and write output to a file.
If the file exists, it will try to insert the docs between <!-- TSDOC_START --> and <!-- TSDOC_END --> comments.
If these does not exist, the output file will be overwritten.

| Function | Type |
| ---------- | ---------- |
| `generateDocumentation` | `({ inputFiles, outputFile }: { inputFiles: string[]; outputFile: string; }) => void` |

Parameters:

* `params.inputFiles`: The list of files to scan for documentation. Absolute or relative path.
* `params.outputFile`: The file to output the documentation in Markdown.




<!-- TSDOC_END -->

## Useful Resources

- [Using the TypeScript Compiler API](https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API)
- [TypeScript AST Viewer](https://ts-ast-viewer.com/#)
- List of [TypeScript node kind](https://github.com/microsoft/TypeScript/blob/main/lib/typescript.d.ts)

## License

MIT © [David Dal Busco](mailto:david.dalbusco@outlook.com)
