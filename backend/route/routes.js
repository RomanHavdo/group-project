const express = require('express');
const router = express.Router();
let User = require('../model/user');


const menuItem = require('../model/menuItem');
const cardItem = require('../model/cardItem');
const carouselData = require('../model/carouselData');
const servicesData = require('../model/servicesData');

const doctorsList = require('../model/doctors');
const appConfigs = require('../model/appConfigs');
const specialistsPage = require('../model/specialistsPage');
const doctorsPage = require('../model/doctorsPage');
const newsPage = require('../model/newsPage');
const newsList = require('../model/news');


router.route('/news_page')
  .get((req, res) => {
    newsPage.find((err, items) => {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(200).json(items);
      }
    })
  });

router.route('/all_news')
  .get((req, res) => {
    newsList.find((err, items) => {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(200).json(items);
      }
    })
  });

router.route('/specialists_page')
  .get((req, res) => {
    specialistsPage.find((err, items) => {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(200).json(items);
      }
    })
  });

router.route('/app_configs')
  .get((req, res) => {
    appConfigs.find((err, items) => {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(200).json(items);
      }
    })
  });

router.route('/api/menu_items')
  .get((req, res) => {
    menuItem.find((err, items) => {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(200).json(items);
      }
    })
  });

router.route('/card_items')
  .get((req, res) => {
    cardItem.find((err, items) => {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(200).json(items);
      }
    })
  });

router.route('/carousel_data')
  .get((req, res) => {
    carouselData.find((err, items) => {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(200).json(items);
      }
    })
  });

router.route('/services_data')
  .get((req, res) => {
    servicesData.find((err, items) => {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(200).json(items);
      }
    })
  });

router.route('/user')
  .post((req, res) => {
    let exist;
    let user = new User(req.body);
    user.save(function (err, userTest, affected) {
      if (err) {
        exist = false;
      } else {
        exist = true;
      }
      res.send(exist);
    });
  });

router.route('/login')
  .post((req, res) => {
    let user = req.body;
    User.findOne({email: user.email}, function (err, existingUser) {
      if (existingUser == null) {
        res.send(existingUser);
      } else {
        existingUser.comparePassword(user.password, function (err, isMatch) {
          if (err) throw err;
          console.log(user.password, isMatch);
          if (isMatch === true) {
            res.send(existingUser);
          } else {
            existingUser = null;
            res.send(existingUser)
          }
        });
      }
    })
  });

router.route('/all_doctors')
  .get((req, res) => {
    doctorsList.find((err, items) => {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(200).json(items);
      }
    })
  });


router.route('/doctors')
  .get((req, res) => {
    if (!req.query.serviceType) {
      res.status(404).send('No data');
    } else {
      const type = req.query.serviceType;
      doctorsList.find((err, items) => {
        if (err) {
          res.status(404).json(err);
        } else {

          let data = items[0].doctors.filter(doctor => {
            return doctor.career.includes(type);
          });

          res.status(200).json(data);
        }
      })
    }
  });

router.route('/doctor/:_id')
  .get((req, res) => {
    if (!req.params._id) {
      res.status(404).send('No data');
    } else {
      const _id = Number(req.params._id);
      doctorsList.find((err, items) => {

        if (err) {
          res.status(404).json(err);
        } else {
          let data = items[0].doctors.filter(doctor => {
            return doctor._id === _id;
          });

          res.status(200).json(data);
        }
      })
    }
  });

router.route('/doctorsPage')
  .get((req, res) => {
    if (!req.query.serviceType) {
      res.status(404).send('No data');
    } else {

      doctorsPage.find((err, items) => {
        if (err) {
          res.status(404).json(err);
        } else {
          res.status(200).json([{

            pictureUrl: items[0].items[0].pictureUrl
          },
            {
              textData: items[0].items[0].textData.filter(item => {
                return item.title === req.query.serviceType;
              })
            }
          ]);
        }
      })
    }
  });

module.exports = router;