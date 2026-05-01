export interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    data?: T;
    pagination?: any;
    errors?: any;
}

export const sendResponse = (
    res: any,
    statusCode: number,
    success: boolean,
    message: string,
    data: any = null,
    pagination: any = null
) => {
    return res.status(statusCode).json({
        success,
        message,
        data,
        ...(pagination && { pagination }),
    });
};

export const sendError = (
    res: any,
    statusCode: number,
    message: string,
    errors: any = null
) => {
    return res.status(statusCode).json({
        success: false,
        message,
        ...(errors && { errors }),
    });
};
