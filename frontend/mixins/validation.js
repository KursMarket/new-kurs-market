export const validationMixins = {
  methods: {
    arrayKeyExists(key, search) {
      if (!search || (search.constructor !== Array && search.constructor !== Object)) {
        return false;
      }

      return search[key] !== undefined;

    },
    errorsAnswerHandling(error) {
      const status = error?.response?.data?.status;
      const serverErrors = {};
      if (status === false) {
        const responseErrors = error?.response?.data?.errors;

        if (responseErrors) {
          for (const e in responseErrors) {
            serverErrors[e] = responseErrors[e].join(' ');
          }
        }
      } else {
        serverErrors['unprocessed_error'] = 'Unprocessed Error!';
      }
      if (this.arrayKeyExists('account_is_blocked', serverErrors)) {
        alert(serverErrors.account_is_blocked);
      }
      return serverErrors;
    },
    validateEmail(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    },
    declination(count, arr = []) {
      const cases = [2, 0, 1, 1, 1, 2];
      return `${count} ${arr[(count % 100 > 4 && count % 100 < 20) ? 2 : cases[Math.min(count % 10, 5)]]}`
    },
    convertSchoolsToHuman(count = 1) {
      return this.declination(['школа', 'школ', 'школы']);
    }
  }
};

export default validationMixins;
