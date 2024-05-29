const ResponseData = (
  status: number,
  message: string | null,
  error: any | null,
  data: unknown,
): unknown => {
  let messageValue: string | null = message,
    dataValue: unknown = data;

  if (error || error instanceof Error) {
    return {
      status: status,
      message: error.message,
      errors: error,
      data: null,
    };
    // messageValue = error.message;
    // dataValue = null;
  }

  return {
    status: status,
    message: messageValue,
    // errors: error,
    data: dataValue,
  };
};

export default { ResponseData };
