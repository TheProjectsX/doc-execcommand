import { hasSelection } from "../../utils/helpers";

export const execBold = (metadata: Record<string, any>): boolean => {
    const selection = window.getSelection();
    if (!hasSelection(selection)) return false;

    const range = selection?.getRangeAt(0);

    return false;
};
