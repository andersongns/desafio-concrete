describe("Utils", () => {
    it("Realizando criptografia da senha 123456", () => {
        const resultadoEsperado =
            "4da23d9b586129c23c40f8e67faa1aabb6d1aaadcfc9c988623ba62b6a69fb0d";
        const encrypto = require("../src/utils/encrypto");
        const senhaCryptografada = encrypto("123456");
        expect(resultadoEsperado).toBe(senhaCryptografada);
    });

    it("Realizando geração de token no padrão jwt", () => {
        const jwt = require("../src/utils/jwt");
        const hash = jwt("teste@email.com");
        expect(hash.split(".").length).toBe(3);
    });
});
