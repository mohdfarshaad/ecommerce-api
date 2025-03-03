import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <Card className="text-center sm:w-[500px] w-[300px]">
        <CardTitle> Sign In</CardTitle>
        <CardContent className="space-y-3">
          <Label htmlFor="email">Email</Label>
          <Input placeholder="email" type="email" />

          <Label htmlFor="password">Password</Label>
          <Input placeholder="password" type="password" />

          <Button className="w-full mt-3">Sign In</Button>
        </CardContent>
        <CardFooter className="justify-between">
          <button>Forget Password ?</button>
          <button onClick={() => navigate("/sign-up")}>SignUp</button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SignIn;
