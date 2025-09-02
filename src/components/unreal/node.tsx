export interface NodePin {
    name: string;
    pintype:
        | "exec"
        | "delegate"
        | "boolean"
        | "int"
        | "struct"
        | "fstring"
        | "bytearray";
}