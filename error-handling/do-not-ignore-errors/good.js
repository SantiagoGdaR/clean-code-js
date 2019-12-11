try {
    updateUser();
} catch (error) {
    console.error(error);
    notifyUserOfError(error);
    reportErrorToApi(error);
}