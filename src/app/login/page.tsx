'use client'

import Link from "next/link";
import { Input } from "../../../packages/ui/src/components/ui/input";
import { GoogleIcon } from "@/components/icons/google";

export default function page(){

    return(
        <div
            style={{
                backgroundImage:
                'linear-gradient(to bottom right, #ffffff 50%, #bff582 85%)',
            }}
            className="flex h-full w-full flex-col items-center justify-center p-4"
            >
            <div className="flex h-full w-full flex-col items-center justify-center gap-8 bg-white p-12 shadow-[0_2px_50px_0px_rgba(0,0,0,0.1)] sm:w-5/6 md:h-fit md:w-2/6 md:min-w-[500px]">
                <div className="flex flex-col">
                
                <h1 className="text-muted-foreground italic">
                    Prescription communication made easy!
                </h1>
                </div>
                <div className="flex h-fit w-full flex-col gap-8">
                <div className="flex w-full flex-col gap-8">
                    <div className="flex w-full flex-col gap-2">
                    <h2 className="w-full text-center text-base">
                        To continue, login!
                    </h2>
                    <button
                        /* className="bg-background hover:cursor-pointer"
                        asChild
                        onClick={() =>
                        void (async () => {
                            await signIn('google');
                        })()
} */
                    >
                        <div className="flex w-full flex-row items-center justify-center gap-2">
                        <GoogleIcon />
                        <h1 className="text-sm text-black">Continue with Google</h1>
                        </div>
                    </button>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-1">
                    <hr className="border-1 border-background w-full" />
                    <p className="text-muted-foreground">OR</p>
                    <hr className="border-1 border-background w-full" />
                    </div>
                </div>
                <div className="flex h-fit w-full flex-col items-center gap-8">
                    {/* <form
                    className="flex h-fit w-full flex-col gap-2"
                    action={form =>
                        void (async () => {
                        await loginAction(form)
                            .then(() => {
                            window.location.replace('/writer');
                            })
                            .catch(() => {
                            toast({
                                title: 'Uh oh, something went wrong.',
                                description: 'Invalid username or password',
                                variant: 'destructive',
                            });
                            });
                        })()
                    }
                    > */}
                    <Input name="email" type="email" placeholder="Email" />
                    <Input name="password" type="password" placeholder="Password" />
                    <button className="w-full" type="submit">
                        Login
                    </button>

                    <div className="flex w-full flex-col items-center justify-center gap-2 pt-4">
                        <Link href="/signup" className="text-xs hover:underline">
                        Don&apos;t have an account?{' '}
                        <span className="text-primary">Create an account</span>
                        </Link>

                        <Link
                        href="/forgot-password"
                        className="text-xs hover:underline"
                        >
                        Forgot your password?
                        </Link>
                    </div>
                    {/* </form> */}
                </div>
                </div>
            </div>
            </div>
        );
        }
