import { InternalLink } from "components";
import { Text } from "ui/components";

export default function NotFound() {
  return (
    <>
      <Text variant="title">Nothing to see here 🙈</Text>
      <Text variant="body1">
        Would you like to return <InternalLink href="/">home</InternalLink>?
      </Text>
    </>
  );
}
