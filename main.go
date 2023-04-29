package main

import (
	"encoding/json"
	"fmt"
	"os"
	"text/template"

	"github.com/otiai10/copy"
)

type Skill struct {
	Name  string `json:"name,omitempty"`
	Type  string `json:"type,omitempty"`
	Value string `json:"value,omitempty"`
}

type Resume struct {
	About string `json:"about,omitempty"`
	Job   string `json:"job,omitempty"`

	Langs []struct {
		Current bool   `json:"current,omitempty"`
		Img     string `json:"img,omitempty"`
		Name    string `json:"name,omitempty"`
		Skill   string `json:"skill,omitempty"`
		Url     string `json:"url,omitempty"`
	} `json:"langs,omitempty"`

	Links []struct {
		Icon string `json:"icon,omitempty"`
		Name string `json:"name,omitempty"`
		Url  string `json:"url,omitempty"`
	} `json:"links,omitempty"`

	Experiences struct {
		Title  string `json:"title,omitempty"`
		Values []struct {
			Captions []string `json:"captions,omitempty"`
			Company  string   `json:"company,omitempty"`
			Dates    string   `json:"dates,omitempty"`
			Img      string   `json:"img,omitempty"`
			Job      string   `json:"job,omitempty"`
			Missions []string `json:"missions,omitempty"`
			Skills   []Skill  `json:"skills,omitempty"`
		} `json:"values,omitempty"`
		Olders struct {
			Captions []string `json:"captions,omitempty"`
			Key      string   `json:"key,omitempty"`
			Missions []struct {
				Company string `json:"company,omitempty"`
				Dates   string `json:"dates,omitempty"`
				Img     string `json:"img,omitempty"`
				Job     string `json:"job,omitempty"`
			} `json:"missions,omitempty"`
		} `json:"olders,omitempty"`
	} `json:"experiences,omitempty"`

	Projects struct {
		Title  string `json:"title,omitempty"`
		Values []struct {
			Description string  `json:"description,omitempty"`
			Img         string  `json:"img,omitempty"`
			Link        string  `json:"link,omitempty"`
			Icon        Skill   `json:"icon,omitempty"`
			Skills      []Skill `json:"skills,omitempty"`
			Title       string  `json:"title,omitempty"`
		} `json:"values,omitempty"`
	} `json:"projects,omitempty"`

	Educations struct {
		Title  string `json:"title,omitempty"`
		Values []struct {
			Dates   string  `json:"dates,omitempty"`
			Diploma string  `json:"diploma,omitempty"`
			Img     string  `json:"img,omitempty"`
			Place   string  `json:"place,omitempty"`
			Skills  []Skill `json:"skills,omitempty"`
		} `json:"values,omitempty"`
	} `json:"educations,omitempty"`

	Tools struct {
		Title  string  `json:"title,omitempty"`
		Values []Skill `json:"values,omitempty"`
	} `json:"tools,omitempty"`

	Behaves struct {
		Title  string   `json:"title,omitempty"`
		Values []string `json:"values,omitempty"`
	} `json:"behaves,omitempty"`

	Interests struct {
		Title  string `json:"title,omitempty"`
		Values []struct {
			Img  string `json:"img,omitempty"`
			Name string `json:"name,omitempty"`
		} `json:"values,omitempty"`
	} `json:"interests,omitempty"`
}

func main() {
	tmpl, err := template.ParseFiles("./index.tmpl")
	if err != nil {
		fmt.Println("failed to unmarshal template file", err)
		os.Exit(1)
	}

	if err := generate(tmpl, "fr"); err != nil {
		fmt.Println(err)
	}
	if err := generate(tmpl, "en"); err != nil {
		fmt.Println(err)
	}

	if err := copy.Copy("./dist/fr", "./dist"); err != nil {
		fmt.Println("failed to copy french page to root", err)
	}

	if err := copy.Copy("./assets", "./dist/assets"); err != nil {
		fmt.Println("failed to copy assets", err)
	}
	os.Exit(0)
}

func generate(tmpl *template.Template, lang string) error {
	input := fmt.Sprintf("./data/%s.json", lang)
	bytes, err := os.ReadFile(input)
	if err != nil {
		return fmt.Errorf("failed to read %q: %w", input, err)
	}

	var resume Resume
	if err := json.Unmarshal(bytes, &resume); err != nil {
		return fmt.Errorf("failed to unmarshal properties of %q: %w", input, err)
	}

	output := "./dist/" + lang
	if err := os.MkdirAll(output, 0755); err != nil {
		return fmt.Errorf("failed to create dist folder: %w", err)
	}

	file, err := os.Create(fmt.Sprint(output, "/index.html"))
	if err != nil {
		return fmt.Errorf("failed to create file %q: %w", fmt.Sprint(output, "/index.html"), err)
	}
	defer file.Close()

	if err := tmpl.Execute(file, resume); err != nil {
		return fmt.Errorf("failed to write template file: %w", err)
	}
	return nil
}
