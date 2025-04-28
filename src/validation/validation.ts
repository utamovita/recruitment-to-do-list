import { z } from "zod";

export function validateData<ParsedData>(data: unknown, schema: z.Schema): ParsedData {
  const parsedData = schema.safeParse(data);

  if (!parsedData.success) {
      console.error(`Validation Error`, { parsedError: parsedData.error });

    return data as ParsedData;
  }

  return parsedData.data;
}
