import PropertyDetail from "@/app/components/own/property-detail";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <>
      <p>{slug}</p>
      <PropertyDetail />
    </>
  );
}
