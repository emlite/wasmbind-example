cmake_minimum_required(VERSION 3.20)
project(wasmbind-example)

include(FetchContent)

FetchContent_Declare(
  wasmbind
  GIT_REPOSITORY https://github.com/emlite/wasmbind.git
  GIT_TAG        main
  GIT_SHALLOW    True
)

# if targeting wasm32-unknown-unknown (freestanding)
set(EMLITE_USE_DLMALLOC ON CACHE BOOL " " FORCE)
FetchContent_MakeAvailable(wasmbind)

add_executable(main src/main.cpp)
target_link_libraries(main PRIVATE webbind::webbind)
set_target_properties(main PROPERTIES LINKER_LANGUAGE CXX SUFFIX .wasm LINK_FLAGS "-Wl,--no-entry,--allow-undefined,--export=main,--export-dynamic,--export-table,--import-memory,--export-memory,--strip-all")