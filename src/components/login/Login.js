import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Input,
  Text,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Button,
} from "@chakra-ui/react";

import "./Login.css";
import { client } from "../../client";
import { PATHS } from "../../paths";

const centeredStyle = {
  height: "100vh",
  display: "grid",
  placeItems: "center",
  background: "dodgerBlue",
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleLogin = () => {
    const body = { email, password };
    client
      .post("/login", body)
      .then((res) => {
        console.log(res);
        console.log(res.data); //token received
        localStorage.setItem("token", res.data.token);
        navigate(PATHS.MANAGE_EXPENSE);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={centeredStyle}>
      <Card variant="elevated" size="lg" maxW="md" width="100%">
        <CardHeader>
          <Heading size="md" mb={-6}>
            Login
          </Heading>
        </CardHeader>

        <CardBody>
          {/* Email input box */}
          <Text mb="8px">Email</Text>
          <Input
            value={email}
            onChange={handleChange}
            placeholder="Email"
            name="email"
            size="md"
          />

          {/* Password input box */}
          <>
            <Text mb="8px" mt={7}>
              Password
            </Text>
            <Input
              value={password}
              onChange={handleChange}
              placeholder="Password"
              name="password"
              size="md"
            />
          </>

          {/* Button */}
          <Button colorScheme="twitter" ml={40} mt={8} onClick={handleLogin}>
            Login
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Login;
