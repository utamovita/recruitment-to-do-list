export const handleError = (action: string, originalError: unknown): string => {
  const errorMessage = `Error occurred while ${action}.`;
  console.error(errorMessage, originalError);
  return errorMessage;
}
