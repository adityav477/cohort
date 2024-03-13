import zod from "zod";
export declare const blogInput: zod.ZodObject<{
    title: zod.ZodString;
    description: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    title: string;
    description: string;
}, {
    title: string;
    description: string;
}>;
export type BlogInput = zod.infer<typeof blogInput>;
