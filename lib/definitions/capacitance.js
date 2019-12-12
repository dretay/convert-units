var capacitance;

capacitance = {
  farad: {
    name: {
      singular: 'Farad'
    , plural: 'Farads'
    }
  , to_anchor: 1
  }
, mF: {
    name: {
      singular: 'Millifarad'
      , plural: 'Millifarads'
    }
    , to_anchor: .001
  }
, uF: {
    name: {
      singular: 'Microfarad'
    , plural: 'Microfarads'
    }
  , to_anchor: .000001
  }
  , nF: {
    name: {
      singular: 'Nanofarad'
    , plural: 'Nanofarad'
    }
  , to_anchor: .000000001
  }
  , pF: {
    name: {
      singular: 'Picofarad'
    , plural: 'Picofarad'
    }
  , to_anchor: .000000000001
  }
};

module.exports = {
  metric: capacitance
, _anchors: {
    metric: {
      unit: 'farad'
    , ratio: 1
    }
  }
};
