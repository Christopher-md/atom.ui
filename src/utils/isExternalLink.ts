const isExternalLink = (url?: string) => {
    if (!url) return null;

    const { hostname } = window.location;

    return new URL(url).hostname !== hostname;
};

export default isExternalLink;
