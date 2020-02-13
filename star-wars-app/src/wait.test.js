import wait from './wait';

jest.useFakeTimers();

// the better returned unresolved Promise way
test("wait for promise to resolve", async () => {
   const spy = jest.fn();

   const waitFn = wait(30, spy);

   jest.runAllTimers();

   const res = await waitFn;

   expect(res).toBe("hurray");

   expect(spy).toHaveBeenCalledWith("hurray");
   expect(spy).toHaveBeenCalledTimes(1);
});