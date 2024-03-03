import { Text } from "ui/components";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { TINA_COMPONENTS } from "components";
import { notFound } from "next/navigation";
import { client } from "../../../tina/__generated__/client";

type PageProps = {
  params: {
    page: string;
  };
  searchParams: Record<string, string>;
};

async function getPageData(page: string) {
  let data;

  try {
    data = await client.queries.page({ relativePath: `${page}.mdx` });
  } catch {
    // Check if the page exists. If not, return a 404.
    notFound();
  }

  return data;
}

export async function generateMetadata({ params: { page } }: PageProps) {
  const { data } = await getPageData(page);

  return {
    title: data.page.title,
    description: data.page.description,
  };
}

export default async function Page({ params: { page } }: PageProps) {
  const { data } = await getPageData(page);

  return (
    <>
      <Text variant="title">{data.page.title}</Text>
      {data.page.description?.map(
        (desc) =>
          desc && (
            <Text
              key={desc}
              variant="subtitle"
              // @TODO: Find a parser utility that works on the server.
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          ),
      )}
      <TinaMarkdown components={TINA_COMPONENTS} content={data.page.body} />
    </>
  );
}
