import type {JSDocTagInfo} from 'typescript';

export type DocEntryType = 'function' | 'method' | 'class' | 'const';

export type DocEntryConstructor = Pick<DocEntry, 'parameters' | 'returnType' | 'documentation'> & {
  visibility: 'private' | 'public';
};

export interface DocEntry {
  name: string;
  fileName?: string;
  documentation?: string;
  type?: string;
  constructors?: DocEntryConstructor[];
  parameters?: DocEntry[];
  methods?: DocEntry[];
  returnType?: string;
  jsDocs?: JSDocTagInfo[];
  doc_type?: DocEntryType;
}

/**
 * Emoji to use to parse titles. Shortcode without `:` - e.g. `gear` for `:gear:`.
 * e.g. cheatsheet https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md
 */
export interface MarkdownEmoji {
  classes: string;
  functions: string;
  constants: string;
  // A function, method or constant title - i.e. an entry of one above titles
  entry: string;
}

export type MarkdownHeadingLevel = '#' | '##' | '###';

/**
 * The options to parse the Markdown content.
 */
export interface MarkdownOptions {
  // Emoji configuration. `undefined` for default configuration, `null` for explicitly no emoji.
  emoji?: MarkdownEmoji | null;
  // The base heading level at which the documentation should start. Default ##
  headingLevel: MarkdownHeadingLevel;
}
