const URL = "127.0.0.1:8080"; //Testing URL
const cardsNumber = 12;
context("memotest", () => {
	before(() => {
		cy.visit(URL); //Visiting testing URL.
	});

	describe("Testing Memotest Game", () => {
		it("checking if there is a board", () => {
			cy.get(".board").find(".card").should("have.length", 12);
		});
	});
});
