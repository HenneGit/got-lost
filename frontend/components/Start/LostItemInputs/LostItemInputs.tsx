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

const generateSchema = (fields: string[]) => {
    const schemaShape = fields.reduce((acc, field) => {
        acc[field] = z.string().min(2, {message: `${field} must be at least 2 characters long.`});
        return acc;
    }, {} as Record<string, z.ZodString>);
    return z.object(schemaShape);
};


const LostItemInputs = ({lostItem}: LostItemInputsProps) => {
    const {t} = useTranslation();
    const emptyObject = {
        material: "",
        manufacturer: "",
        color: "",
        countryOfOrigin: "",
        serialNumber: "",
        cardType: "",
        sex: "",
        birthDay: "",
        city: "",
        homeScreen: "",
        case: "",
        model: "",
        size: "",
        content: "",
        jeweleryType: "",
        otherDescription: "",
        cameraModel: "",
        numberOfKeys: "",
        keyFob: "",
        whichCar: ""

    };
    const form = useForm({
        resolver: zodResolver(generateSchema(Object.keys(lostItem.fields))),
        defaultValues: emptyObject,
        mode: "onBlur",
    });

    const onSubmit = (data: any) => {
        console.log(data);
        alert("Form submitted successfully!");
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {Object.keys(emptyObject).map((fieldName) => {
                    if (!Object.keys(lostItem.fields).includes(fieldName)) {
                        return null;
                    }
                    return (
                        <FormField
                            key={fieldName}
                            control={form.control}
                            name={fieldName as | "material" | "manufacturer" | "color" | "content" | "size" |
                                "countryOfOrigin" | "serialNumber" | "cardType" | "sex" | "city" | "birthDay" |
                                "homeScreen" | "case" | "model" | "jeweleryType" | "otherDescription" | "cameraModel"
                                | "numberOfKeys" | "keyFob" | "whichCar"}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t("fields." + fieldName)}</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={t("fields." + fieldName + "Description")}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        {t("fields." + fieldName + "Description")}
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    );
                })}
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};

export default LostItemInputs;
