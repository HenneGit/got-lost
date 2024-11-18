"use client"
import React from 'react';
import {LostItem} from "@/model/lost-item-type.enum";
import {z} from "zod"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {useTranslation} from "next-i18next";


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


const LostItemInputs = ({lostItem}: LostItemInputsProps) => {
    const {t} = useTranslation();

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
                {lostItem.fields ? Object.keys(lostItem.fields).map((fieldName, index) => (
                    <FormField
                        key={index}
                        control={form.control}
                        name={fieldName}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>{t("fields." + fieldName)}</FormLabel>
                                <FormControl>
                                    <Input key={index} placeholder={t("fields." + fieldName + 'Description')} {...field} />
                                </FormControl>
                                <FormDescription>
                                    {t("fields." + fieldName + 'Description')}
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                )) : null}
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};

export default LostItemInputs;
