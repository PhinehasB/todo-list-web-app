"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";

export default function LoginForm() {
  const formSchema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(128, "Password must be less than 128 characters")
      .refine((password) => /[a-z]/.test(password), {
        message: "Password must contain at least one lowercase letter",
      })
      .refine((password) => /[A-Z]/.test(password), {
        message: "Password must contain at least one uppercase letter",
      })
      .refine((password) => /[0-9]/.test(password), {
        message: "Password must contain at least one number",
      })
      .refine((password) => /[!@#$%^&*(),.?":{}|<>]/.test(password), {
        message:
          'Password must contain at least one special character (!@#$%^&*(),.?":{}|<>)',
      })
      .refine((password) => !/\s/.test(password), {
        message: "Password cannot contain spaces",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   email:""
    // },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-96">
        <div className="flex flex-col gap-2 justify-items-center items-center">
          <h1 className="text-3xl font font-extrabold text-red-400">
            Welcome back!
          </h1>
          <span className="flex gap-1 text-gray-400 dark:text-gray-50">
            Don&#39;t have an account?{" "}
            <Link href="/sign-up" className="text-blue-600 hover:underline">
              Sign up now
            </Link>
          </span>
          <div className="w-full flex flex-col gap-6">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="example@email.com"
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full bg-red-400">
            Log In
          </Button>
          <div className="flex justify-end">
            <Link
              href={"/forgot-password"}
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <Link href={"/dashboard"}>
            <Button variant={"outline"}>LogIn here</Button>
          </Link>
        </div>
      </form>
    </Form>
  );
}
