import {
  json,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";

export async function loader({ context }: LoaderFunctionArgs) {
  return json({ message: context.hello() });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const id = formData.get("id");
  return json({ id });
}

export default function Component() {
  const loaderData = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <div>
      <h1>Test</h1>
      <pre>{JSON.stringify(loaderData, null, 2)}</pre>
      <pre>{JSON.stringify(actionData, null, 2)}</pre>
    </div>
  );
}
