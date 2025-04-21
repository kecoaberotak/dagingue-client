// helper.ts
export function getValueByKey(data: Array<{ key: string; value: string }> | null | undefined, key: string): string {
  return data?.find((item) => item.key === key)?.value || "";
}
