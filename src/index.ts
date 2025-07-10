import { execBold } from "./commands/bold";

type CommandIds = "bold";

const ExecCommands: Record<
    CommandIds,
    (metadata: Record<string, any>) => boolean
> = {
    bold: execBold,
};

export const execCommand = (
    commandId: CommandIds,
    metadata: Record<string, any>
) => {
    const currentCommand = ExecCommands[commandId];
    if (!currentCommand) return false;

    return currentCommand(metadata);
};
