var inductance;

inductance = {
  H: {
    name: {
      singular: 'Henry'
    , plural: 'Henrys'
    }
  , to_anchor: 1
  }
, mH: {
    name: {
      singular: 'Millihenry'
      , plural: 'Millihenrys'
    }
    , to_anchor: .001
  }
, uH: {
    name: {
      singular: 'Microhenry'
    , plural: 'Microhenry'
    }
  , to_anchor: .000001
  }
  , nH: {
    name: {
      singular: 'Nanohenry'
    , plural: 'Nanohenry'
    }
  , to_anchor: .000000001
  }
};

module.exports = {
  metric: inducance
, _anchors: {
    metric: {
      unit: 'H'
    , ratio: 1
    }
  }
};
