const departments = (dept) => {
  if (dept === "Web Dev") {
    return ("web");
  } else if (dept === "ICT") {
    return ("ict");
  } else if (dept === "Backend") {
    return ("backend");
  } else {
    return ("default");
  }
};

export default departments;