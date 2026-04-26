export const isObjectProperty = (prop: any): prop is { name: string; values: NTypeValues } => {
  return prop.values !== null && typeof prop.value === 'object' && !Array.isArray(prop.value);
};

export const isListProperty = (prop: any): prop is { name: string; values: any[] } =>  {
  return Array.isArray(prop.values);
};