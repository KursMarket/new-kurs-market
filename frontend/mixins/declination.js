export const declinationMixins = {
  methods: {
    declination(count, arr = []) {
      const cases = [2, 0, 1, 1, 1, 2];
      return `${arr[(count % 100 > 4 && count % 100 < 20) ? 2 : cases[Math.min(count % 10, 5)]]}`
    },
    convertSchoolsToHuman(count = 1) {
      return this.declination(count, ['школа', 'школы', 'школ']);
    },
    convertOnlineCoursesToHuman(count = 1) {
      return this.declination(count, ['онлайн-курс', 'онлайн-курса', 'онлайн-курсов']);
    },
    convertCoursesPreviewToHuman(count = 1) {
      return this.declination(count, ['курс', 'курса', 'курсов']);
    },
    convertSchoolRatingToHuman(count = 1) {
      return this.declination(count, ['оценка', 'оценки', 'оценок']);
    }
  }
};

export default declinationMixins;
