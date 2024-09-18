self.__uv$config = {
    prefix: '/service/',
    bare: 'https://boolean.azurewebsites.net/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/Uvproxy/uv/uv.handler.js',
    bundle: '/Uvproxy/uv/uv.bundle.js',
    config: '/Uvproxy/uv/uv.config.js',
    sw: '/Uvproxy/uv/uv.sw.js',
};
