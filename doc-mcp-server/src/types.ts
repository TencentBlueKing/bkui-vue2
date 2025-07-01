export interface ComponentInfo {
  name: string;
  displayName: string;
  description: string;
  path: string;
  hasExample: boolean;
}

export interface ComponentProperty {
  name: string;
  description: string;
  type: string;
  required: boolean;
  defaultValue?: string;
  options?: string[];
}

export interface ComponentEvent {
  name: string;
  description: string;
  parameters?: string;
}

export interface ComponentMethod {
  name: string;
  description: string;
  parameters?: string;
  returns?: string;
}

export interface ComponentExample {
  title: string;
  description?: string;
  code: string;
  language: string;
}

export interface ComponentDocumentation {
  info: ComponentInfo;
  properties: ComponentProperty[];
  events: ComponentEvent[];
  methods: ComponentMethod[];
  examples: ComponentExample[];
  fullContent: string;
}

export interface SearchResult {
  component: ComponentInfo;
  relevance: number;
  matchedFields: string[];
}
