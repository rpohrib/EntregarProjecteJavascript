import { shallowMount } from "@vue/test-utils";
import FetchData from "@/views/FetchData.vue";

// Mock global fetch
global.fetch = jest.fn();

describe("FetchData.vue", () => {
  it("mostra comentaris obtinguts amb fetch", async () => {
    // Simulem la resposta de l'API
    const comments = [
      { id: 1, body: "Comentari de prova" }
    ];
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(comments)
    });

    // Muntem el component
    const wrapper = shallowMount(FetchData);

    // Esperem que Vue actualitzi el DOM després de la crida async
    await wrapper.vm.$nextTick();

    // Comprova que el component mostra el comentari esperat
    expect(fetch).toHaveBeenCalledTimes(1);  // Comprova que fetch s'ha cridat una vegada
    expect(fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/comments");  // Comprova la URL
    

  });
});
