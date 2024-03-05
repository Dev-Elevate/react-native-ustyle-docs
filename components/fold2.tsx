import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Fold1() {
  return (
    <div className=" w-full flex items-center justify-center  mb-40">
      <div className=" w-full grid grid-cols-2 gap-8 ">
        <Card>
          <CardHeader>
            <CardTitle>Custom Utility Props Support</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Adds configurable utility props for styling
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Token Based Theming</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Define a set of tokens to be used in your styles
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Fully Typed for Type Safety</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Get the benefits of TypeScript's static type checking
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Zero Runtime Overhead</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Your app remains as fast and responsive as ever.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Zero Bundle Overhead</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Everything is dev-dependency so nothing gets added to your bundle.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Seamless Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Minimal changes to your codebase to get started
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
