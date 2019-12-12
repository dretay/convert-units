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
    , plural: 'Microhenrys'
    }
  , to_anchor: .000001
  }
  , nH: {
    name: {
      singular: 'Nanohenry'
    , plural: 'Nanohenrys'
    }
  , to_anchor: .000000001
  }
};

module.exports = {
  metric: inductance
, _anchors: {
    metric: {
      unit: 'H'
    , ratio: 1
    }
  }
};
