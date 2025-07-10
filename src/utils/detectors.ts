export const wrappedStatus = (
    range: Range,
    tag: string,
    detect: ((element: HTMLElement) => boolean) | null
) => {
    const common = range.commonAncestorContainer;
    let parent =
        common.nodeType === 3 // 3 = TEXT_NODE
            ? common.parentElement
            : (common as HTMLElement);

    if (!parent) return null;

    let target;
    while (true) {
        const found = parent.closest(tag) as HTMLElement;
        if (!found) break;
        if (detect) {
            if (detect(found)) {
                target = found;
                break;
            } else {
                parent = found;
                continue;
            }
        }
        target = found;
        break;
    }

    if (!target) return null;

    if (target.innerText === range.toString()) {
        return "full";
    }

    if (target.innerText.includes(range.toString())) {
        return "contain";
    }


};
