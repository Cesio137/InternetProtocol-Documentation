export interface NodePin {
    name: string;
    pintype:
        | "exec"
        | "delegate"
        | "boolean"
        | "byte"
        | "int"
        | "struct"
        | "fstring"
        | "bytearray"
        | "setobject";
}