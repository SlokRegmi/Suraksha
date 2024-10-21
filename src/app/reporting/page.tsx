'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import PasswordInput from '../passwordinput';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { z } from 'zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { INSPECT_MAX_BYTES } from 'buffer';
const reportschema = z.object({
    fname: z.string(),
    lname: z.string(),
    phoneno: z.string(),
    location: z.string(),
    message: z.string(),
    image: z.string(),
});
export default function Report() {
    const form = useForm({
        defaultValues: {
            fname: '',
            lname: '',
            phoneno: '',
            location: '',
            message: '',
            image: '',
        },
    });

    return (
        <>

            <div className='flex justify-center w-full'>
                <div className='flex flex-col  h-[60%] w-[80%] pl-28 pr-28 space-y-24'>
                    <div className='flex flex-col space-y-1 items-center justify-center'>
                    </div>
                    <Card>

                        <CardContent>
                            <form>
                                <div  >
                                    <div >


                                        <label> First Name</label>
                                        <Input type='text' />
                                    </div>
                                    <div>
                                        <label> Last Name</label>
                                        <Input type='text' />

                                    </div>

                                </div>


                            </form>


                        </CardContent>
                        <CardFooter>
                            <Button>Submit</Button>
                        </CardFooter>
                    </Card>



                </div>
            </div>
        </>
    );
}
