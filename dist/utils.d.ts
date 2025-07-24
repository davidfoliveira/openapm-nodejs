declare const getPackageJson: () => any;
declare const getHostIpAddress: () => string | null;
declare const getSanitizedPath: (pathname: string) => string;
declare const maskValuesInSQLQuery: (query: string) => string;
declare const isCJS: () => boolean;

export { getHostIpAddress, getPackageJson, getSanitizedPath, isCJS, maskValuesInSQLQuery };
