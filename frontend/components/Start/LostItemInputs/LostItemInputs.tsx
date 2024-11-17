"use client"
import React, {useEffect} from 'react';
import {LostItem, LostItemTypeEnum} from "@/model/lost-item-type.enum";
import {z} from "zod"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";


interface LostItemInputsProps {
    lostItem: LostItem;
}

const formSchema = z.object({
    text: z.string().min(2, {
        message: "Text must be at least 2 characters long.",
    }),
    number: z
        .preprocess((value) => Number(value), z.number().positive("Must be a positive number")),
});

const fieldRecord: Record<LostItemTypeEnum, string[]> = {
    [LostItemTypeEnum.WALLET]: [""],
    [LostItemTypeEnum.BAG]: [""],
    [LostItemTypeEnum.KEY]: [""],
    [LostItemTypeEnum.CAMERA]: [""],
    [LostItemTypeEnum.PHONE]: [""],
    [LostItemTypeEnum.CLOTHES]: [""],
    [LostItemTypeEnum.JEWELERY]: [""],
    [LostItemTypeEnum.CARD]: [""],
    [LostItemTypeEnum.OTHER]: [""],
};


const LostItemInputs = ({lostItem}: LostItemInputsProps) => {

    const fields = lostItem.type ? fieldRecord[lostItem.type] : undefined;


    useEffect(() => {
        console.log(Object.keys(lostItem));
    }, []);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            text: "",
            number: "",
        },
        mode: "onBlur",
    });

    const onSubmit = (data: any) => {
        console.log(data);
        alert("Form submitted successfully!");
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Text Field */}
                <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Text</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter text" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter a descriptive text for the form.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Number Field */}
                <FormField
                    control={form.control}
                    name="number"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Number</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter a positive number" type="number" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter a positive number for the field.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};

export default LostItemInputs;
