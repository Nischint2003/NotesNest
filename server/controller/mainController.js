/*
 GET Homepage */

exports.homepage = async (req, res) => {
  const locals = {
    title: "NodeJS",
    descripition: " Free Notes",
  };
  res.render("index", {
    locals,
    layout: "../views/layouts/front-page",
  });
};

/*
 GET ABOUT */

exports.about = async (req, res) => {
  const locals = {
    title: "About Notes",
    descripition: " Free Notes",
  };
  res.render("about", locals);
};
