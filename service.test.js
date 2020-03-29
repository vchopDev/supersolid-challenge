const chai = require("chai");
const { expect } = chai;
const service = require('./service');

describe('IsPalimdrome',  () => {
  it('should return true when input = Are we not pure? “No, sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man—a prisoner up to new era.', () =>{
    expect(service.IsPalimdrome("Are we not pure? “No, sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man—a prisoner up to new era.")).to.be.eql(true);
  });
  it('should return true when input = dhsahdas', () =>{
    expect(service.IsPalimdrome("dhsahdas")).to.be.eql(false);
  })
  it('should return true when input = Taco cat', () =>{
    expect(service.IsPalimdrome("Taco cat")).to.be.eql(true);
  })
  it('should return true when input = ttt', () =>{
    expect(service.IsPalimdrome("ttt")).to.be.eql(true);
  })
  it('should return false when input = test', () =>{
    expect(service.IsPalimdrome("test")).to.be.eql(false);
  })
  it('should return true when input = Dennis, Nell, Edna, Leon, Nedra, Anita, Rolf, Nora, Alice, Carol, Leo, Jane, Reed, Dena, Dale, Basil, Rae, Penny, Lana, Dave, Denny, Lena, Ida, Bernadette, Ben, Ray, Lila, Nina, Jo, Ira, Mara, Sara, Mario, Jan, Ina, Lily, Arne, Bette, Dan, Reba, Diane, Lynn, Ed, Eva, Dana, Lynne, Pearl, Isabel, Ada, Ned, Dee, Rena, Joel, Lora, Cecil, Aaron, Flora, Tina, Arden, Noel, and Ellen sinned.', () =>{
    expect(service.IsPalimdrome("Dennis, Nell, Edna, Leon, Nedra, Anita, Rolf, Nora, Alice, Carol, Leo, Jane, Reed, Dena, Dale, Basil, Rae, Penny, Lana, Dave, Denny, Lena, Ida, Bernadette, Ben, Ray, Lila, Nina, Jo, Ira, Mara, Sara, Mario, Jan, Ina, Lily, Arne, Bette, Dan, Reba, Diane, Lynn, Ed, Eva, Dana, Lynne, Pearl, Isabel, Ada, Ned, Dee, Rena, Joel, Lora, Cecil, Aaron, Flora, Tina, Arden, Noel, and Ellen sinned.")).to.be.eql(true);
  })
})