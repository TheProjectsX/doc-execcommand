export const hasSelection = (selection: Selection | null): boolean => {
    return Boolean(
        selection &&
            !selection.isCollapsed &&
            selection.toString().trim().length > 0
    );
};
