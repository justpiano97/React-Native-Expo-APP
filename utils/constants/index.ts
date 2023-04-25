const Main = {
  Home: 'Home',
  ShiftSeeker: 'ShiftSeeker',
  Employer: 'Employer',
};

const ShiftSeeker = {
  Auth: {
    RegisterBase: 'ShiftSeeker_Register_Base',
    RegisterProfile: 'ShiftSeeker_Register_Profile',
    RegisterComplete: 'ShiftSeeker_Register_Complete',
  },
};

const Employer = {
  Auth: {
    RegisterBase: 'Employer_Register_Base',
    RegisterComplete: 'Employer_Register_Complete',
  },
};

export const pageNameInfo = { Main, ShiftSeeker, Employer };

export const phoneRegExp =
  /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
