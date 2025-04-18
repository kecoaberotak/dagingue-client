type LandingPageContent = {
  id: string;
  key: string;
  value: string;
  created_at?: string;
  updated_at?: string;
};

export default function getValueByKey(data: LandingPageContent[], key: string) {
  return data.find((item) => item.key === key)?.value || "";
}
