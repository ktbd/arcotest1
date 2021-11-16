// 自定义 Jest 配置
exports.node = (config) => {
  config.moduleNameMapper = {
    '^arcotest1/(.+)$': '<rootDir>/$1',
    '^arcotest1$': '<rootDir>',
  };
};

exports.client = (config) => {
  config.moduleNameMapper = {
    '^arcotest1/(.+)$': '<rootDir>/$1',
    '^arcotest1$': '<rootDir>',
  };
};
